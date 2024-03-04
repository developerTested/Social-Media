declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: number;
            HOST_NAME: string;
            JWT_SECRET: string;
            JWT_REFRESH_SECRET: string;
        }
    }
}

export { }