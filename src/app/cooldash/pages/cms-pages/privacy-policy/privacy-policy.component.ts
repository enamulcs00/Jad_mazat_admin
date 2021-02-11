import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ApiService } from '../../../../cooldash/services/api/api.service';
import { CommonService } from '../../../../cooldash/services/common/common.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  public Editor = ClassicEditor;
  data: any;
  config = {
    uiColor: '#ffffff',
    toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    { name: 'links' }, { name: 'insert' },
    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
    { name: 'styles' },
    { name: 'colors' }],
    skin: 'kama',
    resize_enabled: false,
    removePlugins: 'elementspath,save,magicline',
    extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
    colorButton_foreStyle: {
      element: 'font',
      attributes: { color: '#(color)' }
    },
    height: 188,
    removeDialogTabs: 'image:advanced;link:advanced',
    removeButtons: 'Subscript,Superscript,Anchor,Source,Table',
    format_tags: 'p;h1;h2;h3;pre;div'
  };
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('admin')) {
      const data = JSON.parse(localStorage.getItem('admin'));
      if (data.id) {
        this.id = data.id;
      }
    }
    this.getPrivacyPolicy();
  }

  getPrivacyPolicy() {
    this.api.getCrm(this.id).subscribe(res => {
      if (res['response']['success']) {
        console.log('debug response', res);
        this.data = res['data']['privacyPolicy'];
      }
    });
  }

  savePrivacyPolicy() {
    const regex = new RegExp('.*\\S.*[a-zA-z0-9 ]');
    if (!regex.test(this.data)) {
      this.toastr.errorToastr('Please add about us');
    }
    if (this.data) {
      const data = {};
      data['privacyPolicy'] = this.data;
      data['adminId'] = this.id;
      this.api.addCrm(data).subscribe(res => {
        if (res['response']['success']) {
          this.toastr.successToastr(res['response']['message']);
          this.getPrivacyPolicy();
        } else {
          this.toastr.errorToastr(res['response']['message']);
        }
      });
    }
  }

}
