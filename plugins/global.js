import Vue from 'vue';

import InputSearch from '../components/Inputs/InputSearch.vue';
import InputEmail from '../components/Inputs/InputEmail.vue';
import InputRange from '@/components/Inputs/InputRange.vue';
import Checkbox from '@/components/Inputs/Checkbox.vue';
import CheckboxFill from '@/components/Inputs/CheckboxFill.vue';
import CheckboxColor from '@/components/Inputs/CheckboxColor.vue';
import InputQuantity from '@/components/Inputs/InputQuantity.vue';
import TagInput from '@/components/Inputs/TagInput.vue';
import SelectBox from '@/components/Inputs/SelectBox.vue';
import RadioBox from '@/components/Inputs/RadioBox.vue';

import BtnShoppingCart from  '../components/Buttons/BtnShoppingCart.vue';
import BtnText from '../components/Buttons/BtnText.vue';
import BtnRate from '../components/Buttons/BtnRate.vue';
import BtnBuy from '../components/Buttons/BtnBuy.vue';
import BtnTextlink from '../components/Buttons/BtnTextlink.vue';
import BtnFilter from '../components/Buttons/BtnFilter.vue';
import BtnLike from '../components/Buttons/BtnLike.vue';
import BtnPrev from '../components/Buttons/BtnPrev.vue';
import BtnNext from '../components/Buttons/BtnNext.vue';
import BtnFollow from '../components/Buttons/BtnFollow.vue';
import BtnTextlinkFollow from '../components/Buttons/BtnTextlinkFollow.vue';
import BtnAppend from '@/components/Buttons/BtnAppend.vue';
import Textlink from '../components/Buttons/Textlink.vue';
import ToggleMsg from '../components/Buttons/ToggleMsg.vue';
import ToggleNotification from '../components/Buttons/ToggleNotification.vue';
import ToggleAccount from '@/components/Buttons/ToggleAccount.vue';
import BtnCancel from '@/components/Buttons/BtnCancel.vue';
import BtnRadio from '@/components/Buttons/BtnRadio.vue';

import Tag from '../components/Buttons/Tag.vue';
import TagBadge from '@/components/Buttons/TagBadge.vue';
import TagStatus from '@/components/Buttons/TagStatus.vue';

import DropdownInput from '@/components/Dropdown/DropdownInput.vue';
import DropdownSelect from '@/components/Dropdown/DropdownSelect.vue';
import DropdownFilter from '@/components/Dropdown/DropdownFilter.vue';
import DropdownColor from '@/components/Dropdown/DropdownColor.vue';
import DropdownPrice from '@/components/Dropdown/DropdownPrice.vue';
import DropdownPanel from '@/components/Dropdown/DropdownPanel.vue';

import CardRate from '../components/Cards/CardRate.vue';
import CardDesignLine from '@/components/Cards/CardDesignLine.vue';
import CardProduct from '../components/Cards/CardProduct.vue';
import CardBlog from '../components/Cards/CardBlog.vue';
import CardContestDetail from '@/components/Cards/CardContestDetail.vue';
import CardContestClosed from '@/components/Cards/CardContestClosed.vue';
import CardContest from '@/components/Cards/CardContest.vue';
import CardProductLineSimple from '@/components/Cards/CardProductLineSimple.vue';
import CardProductLineEdit from '@/components/Cards/CardProductLineEdit.vue';
import CardProductLineCart from '@/components/Cards/CardProductLineCart';
import CardProductLineCheckout from '@/components/Cards/CardProductLineCheckout.vue';
import CardInstagram from '@/components/Cards/CardInstagram';

import Pagination from '../components/Pagination/Pagination.vue';

import SocialLinks from '@/components/Widgets/SocialLinks.vue';
import VoteRate from '@/components/Widgets/VoteRate.vue';
import VoteRateBar from '@/components/Widgets/VoteRateBar.vue';
import VoteRateBtn from '@/components/Widgets/VoteRateBtn.vue';
import VoteStarBtn from '@/components/Widgets/VoteStarBtn.vue';

import IconIdeal from '@/components/Icons/IconIdeal.vue';
import IconCreditcard from '@/components/Icons/IconCreditcard.vue';
import IconPaypal from '@/components/Icons/IconPaypal.vue';
import IconMisterCash from '@/components/Icons/IconMisterCash.vue';

import Toasts from '@/components/Toasts/Toasts.vue';

Vue.component('input-search', InputSearch);
Vue.component('input-email', InputEmail);
Vue.component('input-range', InputRange);
Vue.component('input-quantity', InputQuantity);
Vue.component('checkbox', Checkbox);
Vue.component('checkbox-fill', CheckboxFill);
Vue.component('checkbox-color', CheckboxColor);
Vue.component('tag-input', TagInput);
Vue.component('select-box', SelectBox);
Vue.component('radio-box', RadioBox);

Vue.component('btn-shopping-cart', BtnShoppingCart);
Vue.component('btn-text', BtnText);
Vue.component('btn-rate', BtnRate);
Vue.component('btn-buy', BtnBuy);
Vue.component('btn-textlink', BtnTextlink);
Vue.component('btn-like', BtnLike);
Vue.component('btn-prev', BtnPrev);
Vue.component('btn-next', BtnNext);
Vue.component('btn-filter', BtnFilter);
Vue.component('btn-follow', BtnFollow);
Vue.component('textlink', Textlink);
Vue.component('btn-textlink-follow', BtnTextlinkFollow);
Vue.component('btn-append', BtnAppend);
Vue.component('tag', Tag);
Vue.component('tag-badge', TagBadge);
Vue.component('tag-status', TagStatus);
Vue.component("toggle-msg", ToggleMsg);
Vue.component("toggle-notification", ToggleNotification);
Vue.component("toggle-account", ToggleAccount);
Vue.component("btn-cancel", BtnCancel);
Vue.component("btn-radio", BtnRadio);

Vue.component('dropdown-input', DropdownInput);
Vue.component('dropdown-select', DropdownSelect);
Vue.component('dropdown-filter', DropdownFilter);
Vue.component('dropdown-color', DropdownColor);
Vue.component('dropdown-price', DropdownPrice);
Vue.component('dropdown-panel', DropdownPanel);

Vue.component('card-rate', CardRate);
Vue.component('card-product', CardProduct);
Vue.component('card-blog', CardBlog);
Vue.component('card-contest-detail', CardContestDetail);
Vue.component('card-contest-closed', CardContestClosed);
Vue.component('card-contest', CardContest);
Vue.component('card-productline-simpe', CardProductLineSimple);
Vue.component('card-productline-edit', CardProductLineEdit);
Vue.component('card-productline-cart', CardProductLineCart);
Vue.component('card-productline-checkout', CardProductLineCheckout);
Vue.component('card-designline', CardDesignLine);
Vue.component('card-instagram', CardInstagram);

Vue.component('pagination', Pagination);

Vue.component('social-links', SocialLinks);
Vue.component('vote-rate', VoteRate);
Vue.component('vote-rate-bar', VoteRateBar);
Vue.component('vote-rate-btn', VoteRateBtn);
Vue.component('vote-star-btn', VoteStarBtn);

Vue.component('icon-ideal', IconIdeal);
Vue.component('icon-creditcard', IconCreditcard);
Vue.component('icon-paypal', IconPaypal);
Vue.component('icon-mistercash', IconMisterCash);

Vue.component('toasts', Toasts);