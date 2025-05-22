
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  // documents: ['./src/graphql/**/*.{ts,tsx}'],
  generates: {
    './src/graphql/types/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node'
      ],
      config: {
        maybeValue: 'T | null | undefined'
      }
    }
  }
};

export default config;
