import { firebaseDatabase } from "./config";

// save("coletas", {
//   produtos: [],
//   endereco: "",
// });

export const save = async (path, body) => {
  const query = await firebaseDatabase.collection(path).add(body);

  const newData = await query
    .get()
    .then((snapshot) => ({
      ...snapshot.data(),
      id: snapshot.id,
    }))
    .then((data) => data);

  return newData;
};

export const getById = async (path, id = "", value = "") => {
  const list = [];
  const query = await firebaseDatabase
    .collection(path)
    .where(`${id}`, "==", `${value}`)
    .get();

  query.forEach((snapshot) =>
    list.push({
      ...snapshot.data(),
      id: snapshot.id,
    })
  );

  return list[0];
};

export const update = async (path, id, newData) => {
  await firebaseDatabase.collection(path).doc(id).update(newData);

  return newData;
};

export const getAll = async (path) => {
  const list = [];

  const query = await firebaseDatabase.collection(path).get();

  query.forEach((snapshot) =>
    list.push({
      ...snapshot.data(),
      id: snapshot.id,
    })
  );

  return list;
};