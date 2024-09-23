import router from '@adonisjs/core/services/router'
import AutoSwagger from "adonis-autoswagger"
import swagger from "#config/swagger";
import {middleware} from "#start/kernel";
import AuthController from "#controllers/auth_controller";

const MembersController = () => import("#controllers/members_controller");


router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

router.get("/docs", async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

router.group(() => {
  router.resource('members', MembersController)
    .apiOnly()
    .params({members: 'index'})
}).use(middleware.auth({guards: ['api']}))
  .prefix('api/v1')

router.post('members/:id/tokens', new AuthController().generateToken)
  .prefix('api/v1')
