import { Tabs } from "expo-router";

// Créez votre context ici

export default function RootLayout() {
  // Initialisez vos états et fonctions ici

  return (
    // Wrappez les tabs avec votre Provider ici
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="food" options={{ title: "Nourrir" }} />
      <Tabs.Screen name="play" options={{ title: "Jouer" }} />
      <Tabs.Screen name="sleep" options={{ title: "Dormir" }} />
    </Tabs>
  );
}
