import * as migration_20251209_092757 from './20251209_092757';
import * as migration_20251211_063424_add_roles_enum from './20251211_063424_add_roles_enum';
import * as migration_20260109_052620_sync_schema_changes from './20260109_052620_sync_schema_changes';

export const migrations = [
  {
    up: migration_20251209_092757.up,
    down: migration_20251209_092757.down,
    name: '20251209_092757',
  },
  {
    up: migration_20251211_063424_add_roles_enum.up,
    down: migration_20251211_063424_add_roles_enum.down,
    name: '20251211_063424_add_roles_enum',
  },
  {
    up: migration_20260109_052620_sync_schema_changes.up,
    down: migration_20260109_052620_sync_schema_changes.down,
    name: '20260109_052620_sync_schema_changes'
  },
];
