# some notes

### Props Notation
pour faire des props , tu va faire dans le componenent enfat exemple

Child component:

```js
<template>
<h3>{{ title }}</h3>
</template>

const props = defineProps({
  title: {
    type: String,
    default: 'No title Specified'
  }

  console.log(props.title)
```

et tu l'appeles dans ton compoenent parent

Parent component
```js
<Child >
```

Il affichera  `No title Specified`.
Mais si tu fais ca : 

```js
<Child  title="c'est le title du componet enfant">
```
### Emits

emit est une fonction qui permet à un composant enfant de communiquer avec son composant parent. En d'autres termes, il permet à un composant enfant d'envoyer un événement personnalisé à son composant parent.

Dans l'extrait de code fourni, emit est utilisé pour définir un événement personnalisé appelé closeModal. Lorsque la fonction handleButtonClick est appelée, elle émet l'événement closeModal en utilisant emit('closeModal').

Le composant parent peut écouter cet événement en utilisant v-on ou @ dans le template. Par exemple, si le composant parent a un gestionnaire d'événements appelé handleModalClose, il peut écouter l'événement closeModal en utilisant @closeModal="handleModalClose".
dans le component enfant, on fait 

```js
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'No title Specified'
  }
})

const emit = defineEmits(['closeModal'])

const handleButtonClick = () => {
  emit('closeModal')
}

// composant enfant appele dans le parent 
 <Modal v-if="showModal" @closeModal="showModal = false" title="My Modal title (via props)">
</script>

```