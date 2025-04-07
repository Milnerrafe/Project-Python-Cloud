import os
import json
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

conn_string = os.getenv('READ_DATABASE_URL')
if not conn_string:
    raise ValueError("READ_DATABASE_URL environment variable not set")



# Update functions
class right:
    @staticmethod
    def serverdb(identifier, status=None, name=None, config_file=None):
        """
        Update server details by ID or name.

        Args:
            identifier: Server ID (int) or name (str)
            status: New status (optional)
            name: New name (optional)
            config_file: New config file (optional)

        Returns:
            Updated server ID if successful, None otherwise
        """
        try:
            with psycopg2.connect(conn_string) as conn:
                with conn.cursor(cursor_factory=RealDictCursor) as cur:
                    # First, get the current server data
                    if isinstance(identifier, int):
                        cur.execute("SELECT * FROM servers WHERE id = %s", (identifier,))
                    else:
                        cur.execute("SELECT * FROM servers WHERE name = %s", (identifier,))

                    current = cur.fetchone()

                    if not current:
                        return None

                    # Update only the provided fields
                    new_status = status if status is not None else current["status"]
                    new_name = name if name is not None else current["name"]
                    new_config = config_file if config_file is not None else current["config_file"]

                    # Update the server
                    cur.execute("""
                    UPDATE servers
                    SET status = %s, name = %s, config_file = %s
                    WHERE id = %s
                    RETURNING id
                    """, (new_status, new_name, json.dumps(new_config), current["id"]))

                    conn.commit()
                    result = cur.fetchone()
                    return result["id"] if result else None
        except Exception as e:
            print(f"Error updating database: {e}")
            return None



# Create functions
class make:
    @staticmethod
    def serverdb(status=None, name=None, config_file=None):
        """
        Create a new server entry.

        Args:
            status: Server status
            name: Server name
            config_file: Server configuration file

        Returns:
            Tuple of (status, name, config_file) and server ID if successful
            None otherwise
        """
        if not name or not status or config_file is None:
            print("Error: All parameters (status, name, config_file) are required")
            return None

        try:
            with psycopg2.connect(conn_string) as conn:
                with conn.cursor(cursor_factory=RealDictCursor) as cur:
                    # Insert new server
                    cur.execute("""
                    INSERT INTO servers (status, name, config_file)
                    VALUES (%s, %s, %s)
                    RETURNING id, status, name, config_file
                    """, (status, name, json.dumps(config_file)))

                    conn.commit()
                    result = cur.fetchone()

                    if result:
                        return (result["status"], result["name"], result["config_file"]), result["id"]
                    return None
        except Exception as e:
            print(f"Error creating server in database: {e}")
            return None
