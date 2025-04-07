import os
from psycopg2 import pool
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

conn_string = os.getenv('READ_DATABASE_URL')
if not conn_string:
    raise ValueError("READ_DATABASE_URL environment variable not set")

# Use connection pool (adjust minconn/maxconn as needed)
try:
    conn_pool = pool.SimpleConnectionPool(minconn=1, maxconn=5, dsn=conn_string)
except Exception as e:
    raise RuntimeError(f"Failed to create connection pool: {e}")

# Read functions
class read:
    @staticmethod
    def serverdb(identifier):
        """
        Read server details by ID or name.

        Args:
            identifier: Server ID (int) or name (str)

        Returns:
            Tuple of (status, name, config_file) if server exists, None otherwise
        """
        conn = None
        try:
            conn = conn_pool.getconn()
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                if isinstance(identifier, int):
                    cur.execute(
                        "SELECT status, name, config_file FROM servers WHERE id = %s",
                        (identifier,)
                    )
                else:
                    cur.execute(
                        "SELECT status, name, config_file FROM servers WHERE name = %s",
                        (identifier,)
                    )

                result = cur.fetchone()
                if result:
                    return result["status"], result["name"], result["config_file"]
                return None
        except Exception as e:
            print(f"Error reading from database: {e}")
            return None
        finally:
            if conn:
                conn_pool.putconn(conn)


# List functions
class list:
    @staticmethod
    def serverdb():
        """
        List all server IDs.

        Returns:
            List of server IDs
        """
        conn = None
        try:
            conn = conn_pool.getconn()
            with conn.cursor() as cur:
                cur.execute("SELECT id FROM servers ORDER BY id")
                result = cur.fetchall()
                return [row[0] for row in result]
        except Exception as e:
            print(f"Error listing servers from database: {e}")
            return []
        finally:
            if conn:
                conn_pool.putconn(conn)
