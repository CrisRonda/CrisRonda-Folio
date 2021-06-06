import { CodeRadioDataType } from "interfaces/CodeRadio";

export const getURLStreaming = async () => {
  try {
    const result = await fetch(process.env.NEXT_PUBLIC_AUDIO);
    const data: CodeRadioDataType = await result.json();
    if (!result.ok || !data?.now_playing?.song) {
      return {};
    }
    return data;
  } catch (error) {
    return {};
  }
};
