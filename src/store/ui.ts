import { useQueryStates, createParser } from "nuqs";

export type UiComponents = "create-group" | "";

const uiComponentParser = createParser({
  parse: (value: string) => {
    if (value) return value as UiComponents;
    return null;
  },
  serialize: (value: UiComponents) => value,
});

export const useUiComponentStore = () => {
  const [uiStore, setUiComponent] = useQueryStates({
    ui: uiComponentParser.withDefault(""),
  });

  return {
    store: uiStore,
    updateUiStore: setUiComponent,
  };
};
  