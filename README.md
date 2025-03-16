# Ad Performance Dashboard

> Fetches ad data from a fake API  
> Displays basic ad performance metrics  
> Dynamically displays different ad types

Created with [create-react-app-vite](https://github.com/laststance/create-react-app-vite) - a Vite template on top of the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.

- [eslint-config-ts-prefixer](https://github.com/laststance/eslint-config-ts-prefixer).
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

### Installation

```sh
cd ad-dashboard
pnpm install
pnpm start
```

### Commands

```sh
pnpm dev             # start development server
pnpm start           # start development server
pnpm test            # run jest
pnpm validate        # run test,lint,build,typecheck concurrently
pnpm lint            # run eslint
pnpm lint:fix        # run eslint with --fix option
pnpm typecheck       # run TypeScript compiler check
pnpm build           # build production bundle to 'dist' directly
pnpm prettier        # run prettier for json|yml|css|md|mdx files
pnpm clean           # remove 'node_modules' 'yarn.lock' 'dist' completely
pnpm serve           # launch server for production bundle in local
```
