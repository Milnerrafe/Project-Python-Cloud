# Import the functions directly from the module
# Assuming the previous code is saved in a file named server_db.py
from server_db import make, read, right, list

def main():
    # Example 1: Create a new server
    print("Creating a new server...")
    server_data, server_id = make.serverdb(
        status="online",
        name="main-server",
        config_file={"port": 8080, "max_connections": 100}
    )
    print(f"Created server with ID: {server_id}")
    print(f"Server data: {server_data}")

    # Example 2: Read server data by ID
    print("\nReading server data by ID...")
    status, name, config = read.serverdb(server_id)
    print(f"Server status: {status}")
    print(f"Server name: {name}")
    print(f"Server config: {config}")

    # Example 3: Read server data by name
    print("\nReading server data by name...")
    status, name, config = read.serverdb("main-server")
    print(f"Server status: {status}")
    print(f"Server name: {name}")
    print(f"Server config: {config}")

    # Example 4: Update server status
    print("\nUpdating server status...")
    updated_id = right.serverdb(server_id, status="maintenance")
    print(f"Updated server ID: {updated_id}")

    # Read updated server data
    status, name, config = read.serverdb(server_id)
    print(f"New server status: {status}")

    # Example 5: Update server config
    print("\nUpdating server config...")
    new_config = config.copy()
    new_config["max_connections"] = 200
    updated_id = right.serverdb(server_id, config_file=new_config)

    # Read updated server data
    status, name, config = read.serverdb(server_id)
    print(f"Updated config: {config}")

    # Example 6: Create another server
    print("\nCreating another server...")
    make.serverdb(
        status="offline",
        name="backup-server",
        config_file={"port": 8081, "max_connections": 50}
    )

    # Example 7: List all server IDs
    print("\nListing all server IDs...")
    all_ids = list.serverdb()
    print(f"All server IDs: {all_ids}")

if __name__ == "__main__":
    main()
