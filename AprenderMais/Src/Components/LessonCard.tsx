import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../Theme/Colors';
import { LessonCardProps } from '../Types';

export const LessonCard: React.FC<LessonCardProps> = ({
  iconColor,
  thumbnailBg,
  title,
  subtitle,
  level,
  levelBg,
  levelTextColor,
  onStart,
}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.thumbnail, { backgroundColor: thumbnailBg }]}>
        <Ionicons name="image-outline" size={22} color={iconColor} />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={[styles.badge, { backgroundColor: levelBg }]}>
          <Text style={[styles.badgeText, { color: levelTextColor }]}>{level}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => onStart(title, level)}
        activeOpacity={0.8}
      >
        <Text style={styles.startButtonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 10,
    marginBottom: 8,
  },
  thumbnail: {
    width: 52,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textPrimary,
    lineHeight: 18,
  },
  subtitle: {
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginTop: 5,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  startButton: {
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
});