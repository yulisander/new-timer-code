import time

class PrecisionTimer:
    def __init__(self):
        self._start_time = None
        self._elapsed = 0.0
        self._running = False

    def start(self):
        if not self._running:
            self._start_time = time.perf_counter()
            self._running = True
            print("Timer started.")

    def stop(self):
        if self._running:
            self._elapsed += time.perf_counter() - self._start_time
            self._running = False
            print("Timer stopped.")

    def display(self):
        hours, rem = divmod(self._elapsed, 3600)
        mins, secs = divmod(rem, 60)
        print(f"Elapsed: {int(mins):02d}:{secs:05.2f}")