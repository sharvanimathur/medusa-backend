import { loadEnv, defineConfig } from '@medusajs/framework/utils';

loadEnv(process.env.NODE_ENV || 'development', process.cwd());

module.exports = defineConfig({
	projectConfig: {
		databaseUrl: process.env.DATABASE_URL,
		workerMode: process.env.MEDUSA_WORKER_MODE,
		http: {
			storeCors: process.env.STORE_CORS!,
			adminCors: process.env.ADMIN_CORS!,
			authCors: process.env.AUTH_CORS!,
			jwtSecret: process.env.JWT_SECRET || 'supersecret',
			cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
		},
	},
	plugins: [
		// ...
		{
			resolve: '@medusajs/admin-sdk',
			/** @type {import('@medusajs/admin-sdk').PluginOptions} */
			options: {
				// only enable `serve` in development
				// you may need to add the NODE_ENV variable
				// manually
				serve: process.env.NODE_ENV === 'development',
				// other options...
			},
		},
	],
});
