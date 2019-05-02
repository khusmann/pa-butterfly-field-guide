
    const imagelookup = {'blues/104c.jpg': require('../assets/butterflies/blues/104c.jpg'),'blues/103c.jpg': require('../assets/butterflies/blues/103c.jpg'),'snouts/113c.jpg': require('../assets/butterflies/snouts/113c.jpg'),'snouts/113c.jpg': require('../assets/butterflies/snouts/113c.jpg')};
    const bfdb_raw = [{"nobs":"19","name":"Spring Azure","sciName":"Celastrina 'ladon'","family":"Lycaenidae","subfamily":"Polyommatinae","group":"Blues","image":"blues/104c.jpg","copyright":"\"Spring Azure\" by asdfsdf","extra":""},{"nobs":"100","name":"Spring Azure2","sciName":"Celastrina 'ladon'","family":"Lycaenidae","subfamily":"Polyommatinae","group":"Blues","image":"blues/103c.jpg","copyright":"\"Spring Azure\" by asdfsdf","extra":""},{"nobs":"1000","name":"Kyle Butterfly","sciName":"Kyleus Butterflus","family":"Husmann","subfamily":"Kyle","group":"Snouts","image":"snouts/113c.jpg","copyright":"COPYRIGHT","extra":""},{"nobs":"150","name":"Meg Butterfly","sciName":"Megalopolus Flippbtus","family":"Megmeg","subfamily":"Butterfly","group":"Snouts","image":"snouts/113c.jpg","copyright":"COPYRIGHT","extra":""}];
    const bfdb = bfdb_raw.map(i => ({
      ...i,
      image: imagelookup[i.image],
      nobs: parseInt(i.nobs),
    }));
    export default bfdb;
  