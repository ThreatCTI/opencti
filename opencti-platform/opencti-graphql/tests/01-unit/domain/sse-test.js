import { rebuildInstanceBeforePatch } from '../../../src/utils/patch';

const instance = {
  _index: 'opencti_stix_domain_objects-000001',
  standard_id: 'threat-actor--214c643d-8ad5-5911-a08e-7aa9111ff8b6',
  personal_motivations: ['coercion'],
  threat_actor_types: ['crime-syndicate', "criminal'"],
  i_created_at_day: '2021-04-23',
  spec_version: '2.1',
  parent_types: ['Basic-Object', 'Stix-Object', 'Stix-Core-Object', 'Stix-Domain-Object'],
  internal_id: 'b397cb7e-1884-4809-ab12-3434931201b7',
  created: '2021-04-23T22:44:44.554Z',
  i_created_at_month: '2021-04',
  confidence: 85,
  description: 'asd awd wadwa',
  created_at: '2021-04-23T22:44:44.554Z',
  revoked: false,
  i_created_at_year: '2021',
  base_type: 'ENTITY',
  entity_type: 'Threat-Actor',
  updated_at: '2021-04-26T18:52:45.914Z',
  name: 'd adsad sadas d',
  modified: '2021-04-26T18:52:45.914Z',
  i_aliases_ids: ['aliases--bec8cf6d-24b2-5953-b861-6c26f01564bd'],
  id: 'b397cb7e-1884-4809-ab12-3434931201b7',
  lang: 'en',
  x_opencti_stix_ids: [],
  object_marking_refs: ['5b14d970-2153-4304-9af3-06d574fa778b', '6bf6c4e3-20f0-4497-bb08-bd2cf59b1e84'],
  objectMarking: [
    {
      standard_id: 'marking-definition--5e57c739-391a-4eb3-b6be-7d15ca92d5ed',
      x_opencti_color: '#c62828',
      x_opencti_order: 4,
      i_created_at_day: '2021-04-08',
      internal_id: '5b14d970-2153-4304-9af3-06d574fa778b',
      spec_version: '2.1',
      parent_types: ['Basic-Object', 'Stix-Object', 'Stix-Meta-Object'],
      definition_type: 'TLP',
      created: '2021-04-08T19:10:55.331Z',
      i_created_at_month: '2021-04',
      created_at: '2021-04-08T19:10:55.331Z',
      i_created_at_year: '2021',
      entity_type: 'Marking-Definition',
      base_type: 'ENTITY',
      updated_at: '2021-04-08T19:10:55.331Z',
      modified: '2021-04-08T19:10:55.331Z',
      definition: 'TLP:RED',
      id: '5b14d970-2153-4304-9af3-06d574fa778b',
      x_opencti_stix_ids: ['marking-definition--5e57c739-391a-4eb3-b6be-7d15ca92d5ed'],
      _index: 'opencti_stix_meta_objects-000001',
    },
    {
      standard_id: 'marking-definition--34098fce-860f-48ae-8e50-ebd3cc5e41da',
      x_opencti_color: '#2e7d32',
      x_opencti_order: 2,
      i_created_at_day: '2021-04-08',
      internal_id: '6bf6c4e3-20f0-4497-bb08-bd2cf59b1e84',
      spec_version: '2.1',
      parent_types: ['Basic-Object', 'Stix-Object', 'Stix-Meta-Object'],
      definition_type: 'TLP',
      created: '2021-04-08T19:10:55.236Z',
      i_created_at_month: '2021-04',
      created_at: '2021-04-08T19:10:55.236Z',
      i_created_at_year: '2021',
      entity_type: 'Marking-Definition',
      base_type: 'ENTITY',
      updated_at: '2021-04-08T19:10:55.236Z',
      modified: '2021-04-08T19:10:55.236Z',
      definition: 'TLP:GREEN',
      id: '6bf6c4e3-20f0-4497-bb08-bd2cf59b1e84',
      x_opencti_stix_ids: ['marking-definition--34098fce-860f-48ae-8e50-ebd3cc5e41da'],
      _index: 'opencti_stix_meta_objects-000001',
    },
  ],
  created_by_ref: 'b2e2a15f-b1a5-4017-bfeb-3238ce4fbe86',
  createdBy: [
    {
      standard_id: 'identity--73adbcdc-176e-5b23-8a8e-8fc1368bad96',
      identity_class: 'individual',
      i_created_at_day: '2021-04-26',
      internal_id: 'b2e2a15f-b1a5-4017-bfeb-3238ce4fbe86',
      spec_version: '2.1',
      parent_types: ['Basic-Object', 'Stix-Object', 'Stix-Core-Object', 'Stix-Domain-Object', 'Identity'],
      created: '2021-04-26T11:55:29.695Z',
      i_created_at_month: '2021-04',
      confidence: 15,
      description: 'SA',
      created_at: '2021-04-26T11:55:29.695Z',
      revoked: false,
      i_created_at_year: '2021',
      entity_type: 'Individual',
      base_type: 'ENTITY',
      updated_at: '2021-04-26T11:55:29.695Z',
      name: 'SAM',
      modified: '2021-04-26T11:55:29.695Z',
      i_aliases_ids: ['aliases--31213d6b-aa46-5f0a-a748-d47478ccaab0'],
      id: 'b2e2a15f-b1a5-4017-bfeb-3238ce4fbe86',
      x_opencti_stix_ids: [],
      lang: 'en',
      _index: 'opencti_stix_domain_objects-000001',
    },
  ],
  labels: ['884506e4-ad4a-49cd-88bc-d40b7069f496'],
  objectLabel: [
    {
      standard_id: 'label--e1248458-93dc-5e37-b9e6-ba4192eafe4c',
      i_created_at_day: '2021-04-12',
      color: '#c25555',
      internal_id: '884506e4-ad4a-49cd-88bc-d40b7069f496',
      spec_version: '2.1',
      parent_types: ['Basic-Object', 'Stix-Object', 'Stix-Meta-Object'],
      created: '2021-04-12T19:51:13.677Z',
      i_created_at_month: '2021-04',
      created_at: '2021-04-12T19:51:13.677Z',
      i_created_at_year: '2021',
      entity_type: 'Label',
      base_type: 'ENTITY',
      updated_at: '2021-04-12T19:51:13.677Z',
      modified: '2021-04-12T19:51:13.677Z',
      id: '884506e4-ad4a-49cd-88bc-d40b7069f496',
      x_opencti_stix_ids: [],
      value: 'label',
      _index: 'opencti_stix_meta_objects-000001',
    },
  ],
};
const patch = {
  replace: {
    confidence: {
      current: 85,
      previous: 75,
    },
  },
  add: {
    object_marking_refs: [
      {
        value: 'marking-definition--34098fce-860f-48ae-8e50-ebd3cc5e41da',
        x_opencti_id: '6bf6c4e3-20f0-4497-bb08-bd2cf59b1e84',
      },
    ],
  },
};
test('Should rebuild instance', () => {
  const rebuildInstance = rebuildInstanceBeforePatch(instance, patch);
  expect(rebuildInstance.confidence).toEqual(75);
  expect(rebuildInstance.object_marking_refs.length).toEqual(1);
});
