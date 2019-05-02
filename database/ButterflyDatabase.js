
    const imagelookup = {'blues/104c.jpg': require('../assets/butterflies/blues/104c.jpg'),'blues/103c.jpg': require('../assets/butterflies/blues/103c.jpg')};
    const bfdb_raw = [{"nobs":"19","name":"Spring Azure","sciName":"Celastrina 'ladon'","family":"Lycaenidae","subfamily":"Polyommatinae","group":"Blues","image":"blues/104c.jpg","copyright":"\"Spring Azure\" by asdfsdf","extra":""},{"nobs":"100","name":"Spring Azure2","sciName":"Celastrina 'ladon'","family":"Lycaenidae","subfamily":"Polyommatinae","group":"Blues","image":"blues/103c.jpg","copyright":"\"Spring Azure\" by asdfsdf","extra":""}];
    const bfdb = bfdb_raw.map(i => ({
      ...i,
      image: imagelookup[i.image],
    }));
    export default bfdb;
  