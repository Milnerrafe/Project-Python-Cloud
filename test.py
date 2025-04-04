import subprocess
import threading

def run_subprocess(command):
    process = subprocess.Popen(
        command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
    )
    output_list = []

    def read_output():
        for line in process.stdout:
            output_list.append(line.strip())

    thread = threading.Thread(target=read_output, daemon=True)
    thread.start()

    return process, output_list, thread

# Example usage
command = ["python3", "-c", "print('hello world')"]
process, output_list, thread = run_subprocess(command)

var1 = ""

while var1 != "Stop":
   var1 = input("Type Stop to stop process and get output")


process.terminate()
thread.join()
print("Process terminated. Final Output:", output_list)
