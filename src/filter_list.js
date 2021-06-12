import _ from 'lodash';

function filterList(lista, ignorado, interesse) {
  var mapListStatus = _.map(lista, (object) => {
    return _.omit(object, [
      'name',
      ignorado,
      'type',
      'gender',
      'origin',
      'location',
      'episode',
      'created',
      'url',
      'image',
    ]);
  });
  return _.uniqBy(mapListStatus, interesse);
}

export default filterList;
