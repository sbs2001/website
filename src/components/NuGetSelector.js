// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getNugetSearch } from '../api/clearlyDefined'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

export default class NuGetSelector extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = { isLoading: false, options: [] }
    this.getOptions = this.getOptions.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(values) {
    const { onChange } = this.props
    const value = values.length === 0 ? null : values[0]
    value && onChange && onChange({ type: 'nuget', provider: 'nuget', name: value.id }, 'package')
  }

  async getOptions(value) {
    try {
      this.setState({ ...this.state, isLoading: true })
      const options = await getNugetSearch(this.props.token, value)
      this.setState({ ...this.state, options, isLoading: false })
    } catch (error) {
      console.log(error)
      this.setState({ ...this.state, options: [], isLoading: false })
    }
  }

  render() {
    const { options, isLoading } = this.state
    return (
      <AsyncTypeahead
        id="nuget-selector"
        useCache={false}
        options={options}
        placeholder={'Pick a Nuget to harvest'}
        onChange={this.onChange}
        labelKey="id"
        clearButton
        highlightOnlyResult
        emptyLabel=""
        selectHintOnEnter
        isLoading={isLoading}
        onSearch={this.getOptions}
      />
    )
  }
}
