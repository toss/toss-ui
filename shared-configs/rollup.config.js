import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const requiredFields = ['main', 'module'];

export function makeRollupConfig(packageJSON, options = {}) {
  const missingField = requiredFields.find(
    (field) => packageJSON[field] === undefined
  );
  if (missingField !== undefined) {
    throw new Error(`'${missingField}' is missing in package.json`);
  }

  const modulePathTokens = packageJSON.module.split('/');
  return {
    input: 'src/index.ts',
    output: [
      {
        file: packageJSON.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: modulePathTokens.slice(0, -1).join('/'),
        format: 'es',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    watch: {
      include: 'src/**',
    },
    plugins: [
      peerDepsExternal(),
      json(),
      typescript({ tsconfig: './tsconfig.lib.json' }),
      commonjs(),
      nodeResolve(),
    ],
    ...options,
  };
}
