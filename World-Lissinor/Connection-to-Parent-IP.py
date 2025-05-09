import socket
import os
import sys
import threading
import time

# Define the parent system's IP address and port
PARENT_IP = '192.168.1.100'  # Replace with the actual IP address of the parent system
PARENT_PORT = 8778

def send_signal_to_parent():
    try:
        # Create a socket object
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        # Connect to the parent system
        sock.connect((PARENT_IP, PARENT_PORT))

        # Send a signal to the parent system
        sock.sendall(b'Interaction detected')

        # Close the connection
        sock.close()
        print("Signal sent to parent system")
    except Exception as e:
        print(f"Failed to send signal to parent system: {e}")

def monitor_interactions():
    while True:
        # Simulate interaction detection (e.g., file access, script execution)
        # For demonstration purposes, we'll just sleep for a short period
        time.sleep(5)

        # Send a signal to the parent system
        send_signal_to_parent()

def main():
    # Start the interaction monitor in a separate thread
    interaction_thread = threading.Thread(target=monitor_interactions)
    interaction_thread.daemon = True
    interaction_thread.start()

    # Your main application code here
    print("Application is running...")
    try:
        while True:
            # Simulate application work
            time.sleep(1)
    except KeyboardInterrupt:
        print("Application is shutting down...")
        sys.exit(0)

if __name__ == "__main__":
    main()