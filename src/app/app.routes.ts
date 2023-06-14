import {XhrComponent} from "./xhr.component";
import {FetchComponent} from "./fetch.component";
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appRoutes = [{
  path: 'xhr', providers: [provideHttpClient()],  component: XhrComponent
}, {
  path: 'fetch', providers: [provideHttpClient(withFetch())], component: FetchComponent
}]
