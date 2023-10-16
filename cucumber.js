module.exports = {
  default: [
    '--require-module ts-node/register',
    ' --require-module tsconfig-paths/register',
    'test/app/features/health/*.feature',
    '--require test/app/features/step_definitions/start.step.ts',
    '--publish-quiet',
    '--force-exit',
  ].join(' '),
};
