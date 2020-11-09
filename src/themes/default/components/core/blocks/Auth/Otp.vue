<template>
  <div>
    <header class="modal-header py25 px65 h1 serif weight-700 bg-cl-secondary">
      {{ $t('Enter Otp') }}
      <i
        slot="close"
        class="modal-close material-icons cl-bg-tertiary"
        @click="close"
      >
        close
      </i>
    </header>

    <div class="modal-content bg-cl-primary pt30 pb60 px65 cl-secondary">
      <template v-if="!passwordSent">
        <form @submit.prevent="sendEmail" novalidate>
          <div class="mb20">
            <p class="mb45">
              {{ $t('Otp is send to your mobile number') }}
            </p>
            <base-input
              type="tel"
              name="otp"
              v-model="otp"
              @blur="$v.otp.$touch()"
              focus
              :placeholder="$t('One time password')"
              :validations="[
                {
                  condition: !$v.otp.required && $v.otp.$error,
                  text: $t('Field is required.')
                }
              ]"
            />
          </div>
          <button-full class="mb35" type="submit">
            {{ $t('Verify') }}
          </button-full>
        </form>
      </template>
    </div>
  </div>
</template>

<script>

import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import BaseInput from '../Form/BaseInput.vue'
import { required } from 'vuelidate/lib/validators'
import { Logger } from '@vue-storefront/core/lib/logger'
import i18n from '@vue-storefront/i18n'

export default {
 validations: {
   otp: {
     required
   }
 },
 methods: {
   close () {
     this.$bus.$emit('modal-hide', 'modal-signup')
   },
 },
 name: 'Otp',
 data () {
   return {
     otp: '',
     passwordSent: false
   }
 },
 components: {
   ButtonFull,
   BaseInput
 }
}
</script>

<style lang="scss" scoped>
.modal-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-close{
  cursor: pointer;
}
.modal-content {
  @media (max-width: 400px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
