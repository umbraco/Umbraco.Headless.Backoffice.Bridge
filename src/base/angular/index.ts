const injector = window.angular?.element(document.body)?.injector()

/** @internal */
export const getService: any = (service: string) => injector.get(service)

/** @internal */
export const editorService = injector !== undefined
  ? getService('editorService')
  : {
      close: () => {},
      contentPicker: () => {},
      mediaPicker: () => {}
    }
