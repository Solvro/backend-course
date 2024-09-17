/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from "adonis-autoswagger"
import swagger from "#config/swagger";

const MembersController = () => import("#controllers/members_controller");


router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

router.get("/docs", async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

router.group(() => {
  router.resource('members', MembersController).apiOnly().params({members: 'index'})
}).prefix('api/v1')
