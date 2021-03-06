// brush: "perl5" aliases: []

//	This file is part of the "jQuery.Syntax" project, and is licensed under the GNU AGPLv3.
//	Copyright 2010 Samuel Williams. All rights reserved.
//	See <jquery.syntax.js> for licensing details.

Syntax.register('perl5', function(brush) {
	var builtins = ["abs", "accept", "alarm", "atan2", "bind", "binmode", "chdir", "chmod", "chomp", "chop", "chown", "chr", "chroot", "close", "closedir", "connect", "cos", "crypt", "defined", "delete", "each", "endgrent", "endhostent", "endnetent", "endprotoent", "endpwent", "endservent", "eof", "exec", "exists", "exp", "fcntl", "fileno", "flock", "fork", "format", "formline", "getc", "getgrent", "getgrgid", "getgrnam", "gethostbyaddr", "gethostbyname", "gethostent", "getlogin", "getnetbyaddr", "getnetbyname", "getnetent", "getpeername", "getpgrp", "getppid", "getpriority", "getprotobyname", "getprotobynumber", "getprotoent", "getpwent", "getpwnam", "getpwuid", "getservbyname", "getservbyport", "getservent", "getsockname", "getsockopt", "glob", "gmtime", "grep", "hex", "index", "int", "ioctl", "join", "keys", "kill", "lc", "lcfirst", "length", "link", "listen", "localtime", "lock", "log", "lstat", "map", "mkdir", "msgctl", "msgget", "msgrcv", "msgsnd", "oct", "open", "opendir", "ord", "pack", "pipe", "pop", "pos", "print", "printf", "prototype", "push", "quotemeta", "rand", "read", "readdir", "readline", "readlink", "readpipe", "recv", "rename", "reset", "reverse", "rewinddir", "rindex", "rmdir", "scalar", "seek", "seekdir", "select", "semctl", "semget", "semop", "send", "setgrent", "sethostent", "setnetent", "setpgrp", "setpriority", "setprotoent", "setpwent", "setservent", "setsockopt", "shift", "shmctl", "shmget", "shmread", "shmwrite", "shutdown", "sin", "sleep", "socket", "socketpair", "sort", "splice", "split", "sprintf", "sqrt", "srand", "stat", "study", "substr", "symlink", "syscall", "sysopen", "sysread", "sysseek", "system", "syswrite", "tell", "telldir", "time", "times", "tr", "truncate", "uc", "ucfirst", "umask", "undef", "unlink", "unpack", "unshift", "utime", "values", "vec", "wait", "waitpid", "warn", "write"];
	
	var keywords = ["bless", "caller", "continue", "die", "do", "dump", "else", "elsif", "eval", "exit", "for", "foreach", "goto", "if", "import", "last", "local", "my", "next", "no", "our", "package", "redo", "ref", "require", "return", "sub", "tie", "tied", "unless", "untie", "until", "use", "wantarray", "while"];
	
	var operators = ["->", "++", "--", "**", "!", "~", "\\", "+", "-", "=~", "!~", "*", "/", "%", "x", "+", "-", ".", "<<", ">>", "<", ">", "<=", ">=", "lt", "gt", "le", "ge", "==", "!=", "<=>", "eq", "ne", "cmp", "~~", "&", "|", "^", "&&", "||", "//", "..", "...", "?:", "=", ",", "=>", "not", "and", "or", "xor"];
	
	var values = ["this", "true", "false"];
	
	brush.push(values, {klass: 'constant'});
	brush.push(keywords, {klass: 'keyword'});
	brush.push(operators, {klass: 'operator'});
	brush.push(builtins, {klass: 'function'});
	
	// Comments
	brush.push(Syntax.lib.perlStyleComment);
	brush.push(Syntax.lib.webLink);
	
	// Variables
	brush.push({
		pattern: /(\$|@|%)\w+/gi,
		klass: 'variable'
	});
		
	// Strings
	brush.push(Syntax.lib.singleQuotedString);
	brush.push(Syntax.lib.doubleQuotedString);
	brush.push(Syntax.lib.stringEscape);
	
	// Numbers
	brush.push(Syntax.lib.decimalNumber);
	brush.push(Syntax.lib.hexNumber);
	
	// Functions
	brush.push(Syntax.lib.cStyleFunction);
});

