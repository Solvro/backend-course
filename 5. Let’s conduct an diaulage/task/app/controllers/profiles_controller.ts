import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import app from '@adonisjs/core/services/app'

export default class ProfilesController {
    public async updateProfile({ request, auth, response }: HttpContext) {
        const user = auth.user!
    

        const profileImage = request.file('profile_image', {
          size: '2mb',
          extnames: ['jpg', 'png', 'jpeg'],
        })
    

        if (!profileImage) {
          return response.badRequest('No file uploaded')
        }
    

        if (!profileImage.isValid) {
          return response.badRequest(profileImage.errors)
        }

        let filePath: string
    

        const fileName = `${new Date().getTime()}.${profileImage.extname}`
        await profileImage.moveToDisk('', {
          name: fileName,         
          visibility: 'public',   
          driver: 'fs',           
        })
    
        filePath = await drive.getUrl(fileName)
        user.profileImage = filePath
        await user.save()
        return response.ok({ message: 'Profile updated', filePath })
      }
}