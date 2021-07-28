import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const requiredPublishConfigFields = ['main', 'module'];

export function makeRollupConfig(packageJSON, options = {}) {
  const publishConfig = packageJSON.publishConfig;
  const missingField = requiredPublishConfigFields.find(
    (field) => publishConfig[field] === undefined
  );
  if (missingField !== undefined) {
    throw new Error(`'${missingField}' is missing in package.json`);
  }

  const modulePathTokens = publishConfig.module.split('/');
  return {
    input: 'src/index.ts',
    output: [
      {
        file: publishConfig.main,
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
