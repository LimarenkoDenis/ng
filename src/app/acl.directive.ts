import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective {

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    // private _authService
  ) {
    console.log('acl');

  }

  ngOnInit() {
    // service - get user
    // user.role
    // [  ]
    // _authService.getUser().subscrib((user) => {
      // if(user.role === 'admin') {
        //   this._viewContainer.createEmbeddedView(this._templateRef);
        //   return;
        // }
        // this._viewContainer.clear();
    // })
  }

}
