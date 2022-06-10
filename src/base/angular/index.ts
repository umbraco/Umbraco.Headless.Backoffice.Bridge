const injector = window.angular?.element(document.body).injector();

// TODO: Should we add proper typings for the angular objects? It's only
// going to be used internally
export type EditorService = {
  close: Function;
  mediaPicker: Function;
}

export const getService = <TService>(service: string) => injector.get(service) as TService;
export const editorService = injector ? getService<EditorService>('editorService') : { mediaPicker: () => {} }

