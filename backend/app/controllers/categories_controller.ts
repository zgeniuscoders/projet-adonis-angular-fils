import type {HttpContext} from '@adonisjs/core/http'
import Category from "#models/category";

export default class CategoriesController {
    /**
     * Display a list of resource
     */
    async index({response}: HttpContext) {
        const categories = await Category.all()
        return response.ok({data: categories})
    }

    /**
     * Handle form submission for the create action
     */
    async store({request}: HttpContext) {
        const data = request.all()
        await Category.create(data)
    }

    /**
     * Show individual record
     */
    async show({params, response}: HttpContext) {
        const id = params.id
        const category = await Category.findOrFail(id)
        return response.ok({data: category})
    }

    /**
     * Handle form submission for the edit action
     */
    async update({params, request, response}: HttpContext) {
        const id = params.id
        const data = request.all()
        const category = await Category.query().where({id: id}).update(data)
        return response.ok({data: category})
    }

    /**
     * Delete record
     */
    async destroy({params}: HttpContext) {
        const id = params.id
        const category = await Category.findOrFail(id)
        await category.delete()
    }
}
