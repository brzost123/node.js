process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('the user uses the version node-v8.11.3-x64.msi, users system language for macOS and Linux is node-v8.11.3.pkg and node-v8.11.3.tar.gz. ');
        }
    }
});
