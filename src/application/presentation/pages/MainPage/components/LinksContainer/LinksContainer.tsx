import React from 'react'
import { LinksCategory as LinksCategoryType } from 'application/domain/entities/links/LinksCategory'
import LinksCategory from 'application/presentation/components/TapLinkCategory'
import s from './LinksContainer.module.scss'

type LinksContainerProps = {
  links: LinksCategoryType[]
}

function LinksContainer({ links }: LinksContainerProps) {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.titleText}>Taplink</div>
        <div className={s.links_container}>
          {links.map(linkCategory => (
            <React.Fragment key={`link_category_${linkCategory.id}`}>
              <LinksCategory
                title={linkCategory.name}
                data={linkCategory.links}
                className={s.category}
              />
              <div className={s.separator}></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinksContainer
