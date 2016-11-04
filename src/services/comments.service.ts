import {Service, Inject} from "ngts-annotations";
import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import {IComment} from '../interfaces';

@Service()
export class CommentsService {

    constructor(@Inject('$http') private _$http: IHttpService) {
        console.log(`CommentsService register`);
    }

    getComments(): IPromise<IComment[]> {
        return this._$http.get('assets/mock.json').then(response => <IComment[]>response.data);
    };
}