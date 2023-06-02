import {defineConfig} from 'vite'


export default defineConfig({
	plugins: [
		VitePluginSSR({
		  prerender: true,
		  includeAssetsImportedByServer: true
		})
	]	
})