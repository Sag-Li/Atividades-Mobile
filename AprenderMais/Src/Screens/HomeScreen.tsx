import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  SafeAreaView, 
  Alert,
  StatusBar
} from 'react-native';
import { Ionicons, Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../Theme/Colors';
import { CategoryItem } from '../Components/CategoryItem';
import { LessonCard } from '../Components/LessonCard';

export const HomeScreen: React.FC = () => {
  const handleStartLesson = (title: string, level: string) => {
    Alert.alert(
      "Aula iniciada",
      `${title} · ${level}`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Começar", style: "destructive", onPress: () => console.log("Aula começada!") }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        
        {/* Cabeçalho Roxo */}
        <View style={styles.header}>
          
          {/* Top Status Bar (Simulado do Protótipo) */}
          <View style={styles.statusBarRow}>
            <Text style={styles.statusTime}>9:41</Text>
            <View style={styles.statusIcons}>
              <Ionicons name="cellular" size={14} color={Colors.white} style={styles.statusIcon} />
              <Ionicons name="wifi" size={14} color={Colors.white} style={styles.statusIcon} />
              <Ionicons name="battery-full" size={14} color={Colors.white} />
            </View>
          </View>

          {/* Saudação e Avatar */}
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Olá, Nadia</Text>
              <Text style={styles.headerTitle}>Vamos praticar hoje?</Text>
            </View>
            <View style={styles.avatar}>
              <Feather name="user" size={22} color={Colors.primary} />
            </View>
          </View>
          
          {/* Barra de Busca */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={16} color={Colors.primary} style={{ marginRight: 8 }} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Buscar aula"
              placeholderTextColor={Colors.searchPlaceholder}
            />
          </View>
        </View>

        {/* Categorias */}
        <View style={styles.categoriesSection}>
          <CategoryItem 
            icon={<Ionicons name="book-outline" size={20} color={Colors.accent} />} 
            label="Vocab" 
          />
          <CategoryItem 
            icon={<Ionicons name="ear-outline" size={20} color={Colors.accent} />} 
            label="Escuta" 
          />
          <CategoryItem 
            icon={<FontAwesome5 name="glasses" size={18} color={Colors.accent} />} 
            label="Leitura" 
          />
          <CategoryItem 
            icon={<Feather name="edit-3" size={18} color={Colors.accent} />} 
            label="Escrita" 
          />
          <CategoryItem 
            icon={<Ionicons name="language-outline" size={20} color={Colors.accent} />} 
            label="Regras" 
          />
        </View>

        {/* Lista de Aulas */}
        <View style={styles.lessonsHeader}>
          <Text style={styles.lessonsTitle}>Aulas de hoje</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.seeAll}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lessonsList}>
          <LessonCard 
            iconColor="#6B3FC7"
            thumbnailBg="#D9D2F4"
            title="Cotidiano" 
            subtitle="Everyday life" 
            level="Fácil" 
            levelBg="#FFC83D"
            levelTextColor="#5A4200"
            onStart={handleStartLesson}
          />
          <LessonCard 
            iconColor="#C2410C"
            thumbnailBg="#FFE0D6"
            title="Viagens" 
            subtitle="Travel" 
            level="Médio" 
            levelBg="#FFB86B"
            levelTextColor="#5A3100"
            onStart={handleStartLesson}
          />
          <LessonCard 
            iconColor="#0F766E"
            thumbnailBg="#D7EFE6"
            title="Negócios" 
            subtitle="Business" 
            level="Difícil" 
            levelBg="#F7B5C0"
            levelTextColor="#6B1024"
            onStart={handleStartLesson}
          />
        </View>

        {/* Botão Sair */}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>

        {/* Barra Home / Rodapé */}
        <View style={styles.homeBar} />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    paddingBottom: 10,
  },
  header: {
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingHorizontal: 16,
    paddingBottom: 18,
  },
  statusBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 34,
    paddingTop: 6,
  },
  statusTime: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.white,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 5,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  greeting: {
    fontSize: 12,
    color: Colors.textLight,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.white,
    marginTop: 2,
    lineHeight: 22,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: Colors.avatarBg,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 38,
    borderRadius: 19,
    paddingHorizontal: 14,
    marginTop: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: Colors.textPrimary,
    paddingVertical: 0,
  },
  categoriesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 6,
  },
  lessonsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
  },
  lessonsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.accent,
  },
  lessonsList: {
    paddingHorizontal: 16,
  },
  logoutButton: {
    paddingTop: 4,
    paddingBottom: 2,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.accent,
  },
  homeBar: {
    width: 110,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.homeBar,
    alignSelf: 'center',
    marginTop: 12,
  },
});