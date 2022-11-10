import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('cart.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL)',
                [],
                ()=> resolve (), 
                (_, err) => reject(err)
            )
        })
    })
    return promise;
}

export const insertCart = (title, image, address) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO cart (title, image, address) VALUES (?, ?, ?);",
          [title, image, address],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };

  export const getCart = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM cart",
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };