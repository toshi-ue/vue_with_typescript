import { createApp } from 'vue'
import App from './App.vue'
import "./assets/global.css";

import { library } from '@fortawesome/fontawesome-svg-core'

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExternalLinkAlt, faGithub)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
