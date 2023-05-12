import { useTheme } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
const THEMES = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];
const SelectTheme = () => {
  const [open, setOpen] = useState(false);
  const { theme, updateTheme } = useTheme();
  const [value, setValue] = useState(theme.mode);
  useEffect(() => {
    updateTheme({ mode: value });
  }, [value]);
  const [items, setItems] = useState(THEMES);
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.txt}> {t("common:themeSelector")} </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        onChangeValue={setValue as any}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};

export default SelectTheme;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  txt: {
    marginTop: 12,
  },
});
