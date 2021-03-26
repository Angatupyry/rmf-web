# pylint: disable=line-too-long

config = {
    "db_url": "sqlite://:memory:",  # TODO: explain how to use different db
    "host": "localhost",  # ip or hostname to bind the socket to
    "port": 8000,
    "static_path": "/static",  # base path that static files should be served from, MUST start with '/' and MUST NOT end with '/'. Also MUST NOT be the root path (i.e. '/' or '').
    "static_directory": "static",  # the directory where static files should be stored.
    "log_level": "INFO",  # https://docs.python.org/3.8/library/logging.html#levels
    "jwt_public_key": None,  # path to a PEM encoded RSA public key which is used to verify JWT tokens, if the path is relative, it is based on the working dir. If `None`, authentication will be disabled.
}
