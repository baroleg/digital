<script setup>
  import { ref } from 'vue'

  const name = ref('')
  const surname = ref('')
  const gender = ref('male')
  const password = ref('')
  const confirmPassword = ref('')
  const showPassword = ref(false)
</script>

<template>
  <div style="padding: 20px; max-width: 400px; margin: 0 auto;">
    <h2>Регистрация</h2>
    
    <div style="margin-bottom: 10px;">
      <label>Имя: </label>
      <input :value="name" @input="name = $event.target.value" placeholder="Введите имя">
    </div>
    
    <div style="margin-bottom: 10px;">
      <label>Фамилия: </label>
      <input :value="surname" @input="surname = $event.target.value" placeholder="Введите фамилию">
    </div>
    
    <div style="margin-bottom: 10px;">
      <label>Пол: </label>
      <select :value="gender" @change="gender = $event.target.value">
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
    </div>
    
    <div style="margin-bottom: 10px;">
      <label>Пароль: </label>
      <input 
        :type="showPassword ? 'text' : 'password'" 
        :value="password" 
        @input="password = $event.target.value"
        placeholder="Введите пароль"
      >
    </div>
    
    <div style="margin-bottom: 10px;">
      <label>Подтверждение пароля: </label>
      <input 
        :type="showPassword ? 'text' : 'password'" 
        :value="confirmPassword" 
        @input="confirmPassword = $event.target.value"
        placeholder="Подтвердите пароль"
      >
    </div>
    
    <div style="margin-bottom: 10px;">
      <button
        @mousedown="showPassword = true"
        @mouseup="showPassword = false"
        @mouseleave="showPassword = false"
      >
        Показать пароль
      </button>
    </div>
    
    <div style="margin: 20px 0; padding: 10px; background: #f0f0f0;">
      <p>Пользователь: {{ name }} {{ surname }}. {{ gender === 'male' ? 'Мужского пола' : 'Женского пола' }}</p>
    </div>
    
    <button 
      :disabled="password !== confirmPassword || !password || !confirmPassword" 
      @click="console.log(name, surname, gender, password)"
      style="padding: 8px 16px;"
    >
      Зарегистрироваться
    </button>
  </div>
</template>