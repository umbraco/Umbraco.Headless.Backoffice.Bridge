const injector = window.angular?.element(document.body)?.injector()

// TODO: Should we add proper typings for the angular objects? It's only
// going to be used internally
export interface EditorService {
  close: Function
  mediaPicker: Function
}

export const getService: any = (service: string) => injector.get(service)
export const editorService: EditorService = injector !== undefined
  ? getService('editorService')
  : {
      close: () => {},
      mediaPicker: () => {}
    }
