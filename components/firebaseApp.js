/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const FirebaseApp = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { _data } = await firestore().collection('alunos').doc('5A1l3eJihz45CIY43ZJd').get();
      setUser(_data);
    };

    getUser();
  }, []);

  return (
    <View>
      <Text style={styles.title}>
        Aluno
      </Text>

      {
        user
          ?
          <View style={styles.bodyContainer}>
            <Text style={styles.body}>
              Nome: {user.nome}
            </Text>
            <Text style={styles.body}>
              Curso: {user.curso}
            </Text>
            <Text style={styles.body}>
              Idade: {user.idade}
            </Text>
          </View >
          : <Text>Carregando...</Text>
      }

    </View >
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 100,
  },
  bodyContainer: {
    alignSelf: 'center',
  },
  body: {
    fontSize: 20,
  },
});
