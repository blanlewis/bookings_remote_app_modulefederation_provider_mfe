
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Bookings';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Bookings' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Bookings') :any;