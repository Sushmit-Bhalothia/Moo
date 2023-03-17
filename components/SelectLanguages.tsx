import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import {
  LANGUAGES,
  translate,
} from "../constants/DCSLocalize";
import { StyleSheet } from "react-native";
import { useLanguage } from "../providers/LanguageProvider";
import { useTranslation } from "react-i18next";
const SelectLanguages = () => {
  const [open, setOpen] = useState(false);
  const {language,changeLanguage} = useLanguage()
  const {t} = useTranslation();
  const [value, setValue] = useState(language);
  return (
    <View className="z-10 w-2/3 flex-row items-center gap-2">
      <Text > {t("common:languageSelector")} </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={LANGUAGES}
        setOpen={setOpen}
        onChangeValue={changeLanguage as any}
        setValue={setValue}
      />
    </View>
  );
};


export default SelectLanguages;
