import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createMicroFrontend } from './app/micro-frontend/create-micro-frontend';

createMicroFrontend({
  appConfig,
  bootstrapComponent: AppComponent,
  elementName: 'mfe-venus',
}).catch((err) => console.error(err));
