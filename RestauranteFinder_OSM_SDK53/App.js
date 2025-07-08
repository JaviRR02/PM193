import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [comida, setComida] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState([]);

  const buscar = async () => {
    if (!comida || !ciudad) {
      alert('Ingresa tipo de comida y ciudad');
      return;
    }

    setLoading(true);
    try {
      const geoRes = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: ciudad,
          format: 'json',
          limit: 1
        }
      });
      const { lat, lon } = geoRes.data[0];

      const query = `[out:json];
        area["name"="${ciudad}"]["boundary"="administrative"]->.searchArea;
        (
          node["amenity"="restaurant"]["cuisine"="${comida}"](area.searchArea);
        );
        out center;`;

      const osmRes = await axios.get('https://overpass-api.de/api/interpreter', {
        params: { data: query }
      });

      setResultados(osmRes.data.elements);
    } catch (err) {
      alert('Error al buscar lugares');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Restaurante Finder</Text>
      <TextInput style={styles.input} placeholder="Tipo de comida" value={comida} onChangeText={setComida} />
      <TextInput style={styles.input} placeholder="Ciudad" value={ciudad} onChangeText={setCiudad} />
      <TouchableOpacity style={styles.button} onPress={buscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#e63946" style={{ marginTop: 20 }} />}

      <ScrollView style={styles.scroll}>
        {resultados.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{item.tags?.name || 'Sin nombre'}</Text>
            <Text style={styles.cardDetail}>Dirección: {item.tags?.['addr:street'] || 'No disponible'}</Text>
            <Text style={styles.cardDetail}>Comida: {item.tags?.cuisine || 'No especificado'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1d3557', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 10, marginBottom: 10 },
  button: { backgroundColor: '#e63946', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  scroll: { marginTop: 10 },
  card: { backgroundColor: '#f1faee', padding: 15, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1d3557' },
  cardDetail: { fontSize: 14, color: '#457b9d' },
});
