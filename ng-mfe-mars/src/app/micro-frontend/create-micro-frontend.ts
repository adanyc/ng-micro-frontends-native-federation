import { ApplicationConfig, NgZone, Type } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

export const createMicroFrontend = async ({ appConfig, bootstrapComponent, elementName }: { appConfig: ApplicationConfig, bootstrapComponent: Type<any>, elementName: string }
) => {
  const app = await createApplication({
    providers: [
      ...appConfig.providers,
      (globalThis as any).ngZone ? { provide: NgZone, useValue: (globalThis as any).ngZone } : [],
    ],
  });

  const microFrontendElement = createCustomElement(bootstrapComponent, {
    injector: app.injector,
  });

  customElements.define(elementName, microFrontendElement);
};
